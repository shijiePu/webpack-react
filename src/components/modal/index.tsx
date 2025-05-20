import { useEffect, useMemo, useState } from 'react';
import styles from './index.scss';
import { Button } from 'antd';

interface ModalProps {
    children: React.ReactNode;
    open: Boolean;
    onClose?: () => void;
    footer?: React.ReactNode;
    title?: string | React.ReactNode;
}

console.log(styles)
const Modal = (props: ModalProps) => {
    console.log(props)

    const [show, setShow] = useState(false)
    const {
        children,
        open,
        onClose: _onClose,
        footer,
        title
    } = props

    const onClose = () => {
        _onClose?.()
    }

    // 禁用滚动
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const footerDefault = () => {
        return <div className={styles['_modal-footer']}>
            <Button onClick={() => setShow(false)}>确认</Button>
            <Button onClick={() => setShow(false)}>取消</Button>
        </div>
    }


    return <div className={`${styles._modal} ${open ? styles['_modal--open'] : ''}`}>
        <div className={styles['_modal-content']}>
            {onClose && (
                <button
                    className={styles['_modal-close']}
                    onClick={onClose}
                    aria-label="关闭模态框"
                >
                    &times;
                </button>
            )}

            {
                title && <div className={styles['_modal-title']}>{title}</div>
            }

            <div className={styles['_modal-body']}>
                {children}
            </div>

            {footer ?
                <div className={styles['_modal-footer']}>{footer}</div>
                : footerDefault()
            }
        </div>
    </div>
}


export {
    Modal
}