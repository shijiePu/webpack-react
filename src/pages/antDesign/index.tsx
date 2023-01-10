import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom"
import axiosData from "./data"
import axiosChildData from "./getChildrenData"
import { Tree, Button, Checkbox } from 'antd';
import { cloneDeep } from "lodash"
import "./index.scss"

const CheckboxGroup = Checkbox.Group;

const Antd = () => {


  const [treeData, setTreeData] = useState([])
  const [showTreeData, setShowTreeData] = useState(axiosData.response)
  const [levelItem, setLevelItem] = useState([])
  const [currLevelItem, setCurrLevelItem] = useState(null)
  const [checkedKeys, setcheckedKeys] = useState([])
  const [cannotDelIds, setCannotDelIds] = useState([])
  // todo 下级时 children中有的ID 需要拎出来？

  useEffect(() => {
    fetchData().then((res: any) => {
      setShowTreeData(res)
      console.log(res);
      pushLevelItem(res, '', 0)
    })
  }, [])

  const pushLevelItem = (res: any, name: any, level: any) => {
    console.log('pushLevelItem');
    const getCurrIten = levelItem[level]
    if (!getCurrIten) {
      const lastLevelItem = {
        children: res,
        level: level,
        checkedKeys: [],
        checkAll: false,
        indeterminate: false,
        name: name ? name : 'geng',
        disabled: false
      }
      const newlevelItem: any = [...levelItem as any, lastLevelItem as any]
      // debugger
      setLevelItem(newlevelItem)
      setCurrLevelItem(lastLevelItem as any)
    }
  }

  const mergeCurrlevelItem = (needMergeItem: any, needMergeName: any, needMergeLevel: any, nextLevelDisabled: any) => {
    const levelItemCp: any = cloneDeep(levelItem)
    levelItemCp.splice(needMergeLevel, 1, currLevelItem)
    console.log({ needMergeLevel, levelItemCp, currLevelItem });
    const lastLevelItem = {
      children: needMergeItem || [],
      level: needMergeLevel + 1,
      checkedKeys: [],
      checkAll: false,
      indeterminate: false,
      name: needMergeName ? needMergeName : 'geng',
      disabled: nextLevelDisabled
    }
    levelItemCp.push(lastLevelItem)
    setLevelItem(levelItemCp)
    setCurrLevelItem(lastLevelItem as any)
  }

  const goTargetLevelItem = (level: any) => {
    const levelItemCp: any = cloneDeep(levelItem)
    const currLevelItemCp: any = cloneDeep(currLevelItem)
    const delLevelList = levelItemCp.splice(level + 1)
    console.log('删掉的层级', delLevelList);
    let aLLDelIds: any = cloneDeep(cannotDelIds)
    delLevelList.forEach((item: any) => {
      if (item.level === currLevelItemCp.level) {
        const childrenIds = currLevelItemCp.checkedKeys
        aLLDelIds = [...aLLDelIds, ...childrenIds]
      } else {
        const childrenIds = item.checkedKeys
        aLLDelIds = [...aLLDelIds, ...childrenIds]
      }
    })
    setCannotDelIds(aLLDelIds)
    setLevelItem(levelItemCp)
    setCurrLevelItem(levelItemCp[level])
  }

  useEffect(() => {
    console.log('---------------', { currLevelItem });

  }, [currLevelItem])

  const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(axiosData.response)
    }, 100)
  })

  const fetchChildData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(axiosChildData.response)
    }, 100)
  })



  const onCheckChange = (checkedKeys: any, row: any) => {
    const { children } = row;
    const currentCheckAll: any = checkedKeys.length > 0 && checkedKeys.length === children.length
    const currentIndeterminate: any = checkedKeys.length > 0 && checkedKeys.length !== children.length
    const currentCheckedKeys: any = checkedKeys
    const newcurrLevelItem = {
      ...row,
      indeterminate: currentIndeterminate,
      checkAll: currentCheckAll,
      checkedKeys: currentCheckedKeys,
    }
    setCurrLevelItem(newcurrLevelItem)
  }

  const onCheckAllChange = (e: any, row: any) => {
    const { children } = row;
    const currentCheckAll: any = e.target.checked
    const currentIndeterminate: any = false
    const currentCheckedKeys: any = e.target.checked ? children.map((item: any) => item.nodeId) : []

    const newcurrLevelItem = {
      ...row,
      indeterminate: currentIndeterminate,
      checkAll: currentCheckAll,
      checkedKeys: currentCheckedKeys,
    }
    setCurrLevelItem(newcurrLevelItem)
  }

  useEffect(() => {
    console.log('checked 变化', { cannotDelIds });
    let newCheckedKeys: any = cloneDeep(cannotDelIds)
    levelItem.forEach((item: any) => {
      const { level, checkedKeys: itemCheckedKeys } = item;
      // console.log('各层级', level);
      if (level === currLevelItem?.level) {
        newCheckedKeys = [...newCheckedKeys, ...currLevelItem.checkedKeys]
      } else {
        newCheckedKeys = [...newCheckedKeys, ...itemCheckedKeys]
      }
    })

    setcheckedKeys(newCheckedKeys)
  }, [currLevelItem])

  const renderCheckboxGroup = (item: any) => {
    const { indeterminate, checkAll, checkedKeys, children, level, disabled } = item;

    return (<div key={level}>
      <Checkbox indeterminate={indeterminate} disabled={disabled} onChange={(e: any) => onCheckAllChange(e, item)} checked={checkAll}>
        Check all
      </Checkbox>
      <CheckboxGroup value={checkedKeys} disabled={disabled} onChange={(keys) => onCheckChange(keys, item)}>
        {
          children.map((child: any) => {
            return (<>
              <Checkbox value={child.nodeId}>
                <div style={{ width: '100px' }}>
                  {child.name}
                </div>
              </Checkbox>
              <div
                onClick={() => handleClickNextLevel(child, level)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#136EFF',
                  width: '50px',
                  cursor: 'pointer'
                }}
              >
                下级
              </div>
            </>)
          })
        }

      </CheckboxGroup>
    </div>)
  }

  const handleClickNextLevel = async (currlevelItem: any, level: any) => {

    console.log('下级handleClickNextLevel', { currlevelItem, level });
    const currNodeId: any = currlevelItem?.nodeId || '';
    const disabled: any = checkedKeys.includes(currNodeId)
    if (currlevelItem.children && currlevelItem.children.length > 0) {
      mergeCurrlevelItem(currlevelItem.children, currlevelItem.name, level, disabled)
    } else {
      fetchChildData().then((res: any) => {
        console.log('fetchChildData', res.data);
        mergeCurrlevelItem(res.data.map((item: any) => ({
          ...item,
          nodeId: item.id,
          parentId: item.recordId,
        })), currlevelItem.name, level, disabled)
      })
    }


  }

  // 到指定层级
  const goLevel = (level: any) => {
    if (level === currLevelItem.level) return
    console.log('goLevel到指定层级', level, levelItem);
    goTargetLevelItem(level)
  }

  return (<>
    {<Button type='primary'  >返回root</Button>}
    <h1>----------------------</h1>
    {
      !!levelItem.length && levelItem.map((item: any) => {
        const { name, level } = item;
        return (<div key={level} onClick={() => goLevel(level)}>aaaaa{name}</div>)
      })
    }
    <h1>----------------------</h1>
    {
      currLevelItem && renderCheckboxGroup(currLevelItem)
    }
    {/* 此处的outlet代表 element + 子路由的outlet */}
    <h1>checkedKeys：</h1>
    {console.log('***************', checkedKeys)}
    {
      checkedKeys.map(item => (<h1>{item}</h1>))
    }
    <Outlet />
  </>
  )
};

export default Antd;


