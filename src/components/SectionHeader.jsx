import React from 'react'

const SectionHeader = ({ tag, title, showArrow = true }) => {
    return (
        <>
            <div className='d-flex align-items-center gap-3'>
                <div className='accentbar'></div>
                <h2 className="section-label">{tag}</h2>
            </div>
            <div className="d-flex justify-content-between align-items-end flex-wrap gap-4 mb-4">
                <div className='mt-3'>
                    <h2 className='inter '>{title}</h2>
                    <div></div>
                </div>
                {
                    showArrow && <div className='d-flex gap-2'>
                        <button class="arrow-btn" aria-label="Scroll Left" fdprocessedid="zthycn">
                            <i class="bi bi-arrow-left"></i>
                        </button>
                        <button class="arrow-btn" aria-label="Scroll Left" fdprocessedid="zthycn">
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                }

            </div>
        </>
    )
}

export default SectionHeader
