import React from 'react'
import style from './index.less'
import { Table } from 'antd'

function DatasourceTable({
    columns,
    data
}) {
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <div className={style.container}>
            <Table 
                columns={columns} 
                dataSource={data} 
                rowSelection={{
                    ...rowSelection
                }}
            />
        </div>
    )
}

export default DatasourceTable