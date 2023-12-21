import React from 'react'
import { Button } from 'react-bootstrap';

export default function TableByUrl(props) {
    const [url, setUrl] = React.useState();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(url);
            const res = await response.json();
            const mainText = {
                id: `table${props.selectedGrid[0]}`,
                texts: res.data
            }

            const updatedItems = props.gridsBlock.map((item) => {
                if (item.mainid === props.selectedGrid[1]) {
                    item.items.forEach((innerItem) => {
                        if (innerItem.id === mainText.id.replace(/^\D+/g, '')) {
                            if (!innerItem.tableData) {
                                innerItem.tableData = [];
                            }
                            innerItem.tableData.push(...mainText.texts);
                        }
                    });
                }
                return item;
            });
            props.setGridsBlock([...updatedItems]);

        } catch (error) {
            console.log(error);
        };


    };
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className='blockflex'>
                    <span>url</span>
                    <input type='text' className='form-control' onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div className='d-flex mt-1 justify-content-center'>
                    <Button type='submit'
                    >Make table</Button>
                </div>
            </form>
        </div>
    )
}
