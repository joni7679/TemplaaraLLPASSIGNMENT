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
                                <li key={id} className='list-group-item d-flex align-items-center justify-content-between'>
                                    <a href="#" className=''>{name} </a>
                                    <span>{hasSubMenu && <i className="bi bi-chevron-right fs-7 text-dark"></i>}</span>
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
