import { Button, Space } from '@arco-design/web-react';
import { IconPlus, IconDelete } from '@arco-design/web-react/icon';

// todo  按需加载
const ArcoDesign = () => {
    return (
        <Space size='large'>
            <Button type='primary' icon={<IconPlus />} />
            <Button type='primary' icon={<IconDelete />}>
                Delete
            </Button>
        </Space>
    );
};

export default ArcoDesign;