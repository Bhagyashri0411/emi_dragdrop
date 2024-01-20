import React from 'react';
import { Iconlists } from '../../CommonComponents/Iconlists';

const DefaultHeader = ({ page, setIsTrue }) => {
    const headercomponent = page.headercomponent;
    const applyStyles = () => ({
        fontSize: `${headercomponent.logo?.styles.fontSize}px`,
        fontWeight: headercomponent.logo?.styles.fontWeight,
        color: headercomponent.styles.color,
    });


    const applyStyleItems = (item) => ({
        borderLeft: item[0] ? '2px solid' : 'none',
        borderRight: item[1] ? '2px solid' : 'none',
        color: headercomponent?.styles.color,
        padding: `${headercomponent.logo?.styles.padding[0]}px ${headercomponent.logo?.styles.padding[1]}px`
    });

    return (
        <>
            <nav
                className={`header`}
                style={{ backgroundColor: headercomponent.styles?.bgColor }}
                onClick={() => setIsTrue([false, headercomponent.id])}
            >
                <div className={`col-md-${headercomponent.styles?.size} mx-auto`}>
                    <div className='d-flex justify-content-between align-items-center'>
                        {headercomponent.logo?.type ? (
                            <h1 className='mb-0'
                                style={applyStyles()}
                            >
                                {headercomponent.logo?.logoname}
                            </h1>
                        ) : (
                            <div>
                                {/* {props.headerInfo.logo && (
                    <img
                      src={URL.createObjectURL(props.headerInfo.logo)}
                      alt="CompanyLogo"
                      style={applyStylesLogo()}
                      onMouseEnter={(e) => { e.stopPropagation(); handleOpenMenu(setMenuElImage, e) }}
                    />
                  )} */}
                            </div>
                        )}

                        <div>
                            <ul
                                className={`d-flex align-items-center`}
                            >
                                {headercomponent.items.map((item, index) => (
                                    <div key={index}
                                        style={applyStyleItems(item.styles)}
                                    >
                                        <li>
                                            <a href={item.href}>
                                                {item.type ? (
                                                    item.itemname
                                                ) :

                                                    Iconlists.map((icon, index) =>
                                                        icon.name === item.icon ?
                                                            <icon.icon />
                                                            : ""
                                                    )
                                                }
                                            </a>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default DefaultHeader;
