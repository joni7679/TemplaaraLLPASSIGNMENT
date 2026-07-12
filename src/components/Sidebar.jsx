import React from 'react'
import { subcategories } from '../data/subcategories'

const Sidebar = () => {
    return (
        <>
            <aside className="col-lg-3 col-md-4">
                <ul className='subcategories-slider'>
                    {
                        subcategories.map((cate) => {
                            const { id, name, hasSubMenu } = cate
                            return (
                                <li key={id} className='list-group-item'>
                                    <a href="#" className=''>{name}</a>
                                </li>
                            )
                        })
                    }

                </ul>
            </aside>
        </>
    )
}

export default Sidebar
