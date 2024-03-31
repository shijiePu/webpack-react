const timer = [
    { name: '第一季度', value: '第一季度', text: "第一季度" },
    { name: '半年度', value: '半年度', text: "半年度" },
    { name: '第三季度', value: '第三季度', text: "第三季度" },
    { name: '全年度', value: '全年度', text: "全年度" },
]

const getTimer = () => timer;

const keywordsList = [
    { name: '招商证券', value: '招商证券', key: "name", text: "招商证券" },
    { name: '测试公司', value: '测试公司', key: "affiliation", text: "测试公司" },
]

const getKeywordsList = () => keywordsList;

const _dataSource1 = [
    {
        key: '1',
        name: '万科地产',
        isRoot: true,
        children: [
            {
                key: '1-1',
                name: '万科地产1-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-2',
                name: '万科地产1-2',
                timer: timer[2].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-3',
                name: '万科地产1-3',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
        ]
    },
    {
        key: '2',
        name: '中国石化',
        isRoot: true,
        children: [
            {
                key: '2-1',
                name: '中国石化2-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "公司2",
            },
            {
                key: '2-2',
                name: '中国石化2-2',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "公司2",
            },
        ]
    },
];

const _dataSource2 = [
    {
        key: '1',
        name: '万科地产',
        isRoot: true,
        children: [
            {
                key: '1-1',
                name: '万科地产1-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-2',
                name: '万科地产1-2',
                timer: timer[2].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-3',
                name: '万科地产1-3',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-4',
                name: '万科地产1-4',
                timer: timer[1].value,
                create: 'rolader Yu',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-5',
                name: '万科地产1-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-6',
                name: '万科地产1-2',
                timer: timer[2].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-7',
                name: '万科地产1-3',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-8',
                name: '万科地产1-4',
                timer: timer[1].value,
                create: 'rolader Yu',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            }
        ]
    },
    {
        key: '2',
        name: '中国石化',
        isRoot: true,
        children: [
            {
                key: '2-1',
                name: '中国石化2-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "公司2",
            },
            {
                key: '2-2',
                name: '中国石化2-2',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "公司2",
            },
        ]
    },
];

const _dataSource3 = [
    {
        key: '1',
        name: '万科地产',
        isRoot: true,
        children: [
            {
                key: '1-1',
                name: '万科地产1-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-2',
                name: '万科地产1-2',
                timer: timer[2].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-3',
                name: '万科地产1-3',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-4',
                name: '万科地产1-4',
                timer: timer[1].value,
                create: 'rolader Yu',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-5',
                name: '万科地产1-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-6',
                name: '万科地产1-2',
                timer: timer[2].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-7',
                name: '万科地产1-3',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            },
            {
                key: '1-8',
                name: '万科地产1-4',
                timer: timer[1].value,
                create: 'rolader Yu',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "招商证券",
            }
        ]
    },
    {
        key: '2',
        name: '中国石化',
        isRoot: true,
        children: [
            {
                key: '2-1',
                name: '中国石化2-1',
                timer: timer[0].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "公司2",
            },
            {
                key: '2-2',
                name: '中国石化2-2',
                timer: timer[3].value,
                create: 'admin',
                createTime: "2020/04/30",
                status: '1',
                affiliation: "公司2",
            },
        ]
    },
];

const getDataSource = () => _dataSource1;

const getAllData = () => [_dataSource1, _dataSource2, _dataSource3]



export {
    getTimer,
    getKeywordsList,
    getDataSource,
    getAllData
}