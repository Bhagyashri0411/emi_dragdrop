import React from 'react';
import { Iconlists } from '../../CommonComponents/Iconlists';

const DefaultHeader = ({ page, setIsTrue, isTrue }) => {
    const headercomponent = page.headercomponent;

    const applyStyles = () => ({
        fontSize: `${headercomponent.logo?.styles.fontSize}px`,
        fontWeight: headercomponent.logo?.styles.fontWeight,
        color: headercomponent.styles.color,
    });

    const applyStylesLogo = () => ({
        width: `${headercomponent.logo?.styles.width}px`,
        height: `${headercomponent.logo?.styles.height}px`
    })

    const applyStyleItems = (item) => ({
        borderLeft: item.border[0] ? '2px solid' : 'none',
        borderRight: item.border[1] ? '2px solid' : 'none',
        color: headercomponent?.styles.color,
        padding: `${headercomponent.styles.padding[0]}px ${headercomponent.styles.padding[1]}px`
    });

    const applyStylesItemImg = (item) => ({
        width: `${item.width}px`,
        height: `${item.height}px`
    })


    return (
        <>
            <nav
                className={`header ${isTrue[1] === "header" && "selected"}`}
                style={{ backgroundColor: headercomponent.styles?.bgColor }}
                onClick={() => setIsTrue([false, headercomponent.id])}
            >
                <div className={`col-md-${headercomponent.styles?.size} mx-auto`}>
                    <div className='d-flex justify-content-between align-items-center'>
                        {!headercomponent.logo?.type ? (
                            <h1 className='mb-0'
                                style={applyStyles()}
                            >
                                {headercomponent.logo?.logoname}
                            </h1>
                        ) : (
                            <div>
                                {headercomponent.logo?.logoimg && (
                                    <img
                                        src={URL.createObjectURL(headercomponent.logo?.logoimg)}
                                        alt="CompanyLogo"
                                        style={applyStylesLogo()}
                                    // onMouseEnter={(e) => { e.stopPropagation(); handleOpenMenu(setMenuElImage, e) }}
                                    />
                                )}
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
                                                {item.type === "text" ? item.itemname
                                                    :
                                                    item.type === "img" ?

                                                        item.img &&
                                                        <img
                                                            src={URL.createObjectURL(item?.img)}
                                                            alt="CompanyitemLogo"
                                                            style={applyStylesItemImg(item.styles)}
                                                        // onMouseEnter={(e) => { e.stopPropagation(); handleOpenMenu(setMenuElImage, e) }}
                                                        />
                                                        :
                                                        Iconlists.map((icon, index) =>
                                                            icon.name === item.icon && <icon.icon />
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
