import React from 'react';
import "./default_header.css"
import { ChevronRight } from 'lucide-react';

export default function DefaultHeaderOption() {
    return (
        <div className="rightSideBar">
            <div className="noBorderTop">
                <div className="title">
                    <div className="breadcrumbs">
                        <div className="breadcrumb">
                            <button className="breadcrumbLabel">Page</button>
                            <ChevronRight />
                        </div>
                        <div className="heading">
                            <h2 className="Heading--xs">Header</h2>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <form className="PuckFields">

                        <label className="Input">
                            <div className="Input-label">
                                <div className="Input-labelIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucid">
                                        <polyline points="4 7 4 4 20 4 20 7" />
                                        <line x1={9} x2={15} y1={20} y2={20} />
                                        <line x1={12} x2={12} y1={4} y2={20} />
                                    </svg>
                                </div>title</div>
                            <input className="Input-input" autoComplete="off" id="Hero-1687283596554_title" type="text" defaultValue="This page was built with Puck" name="title" />
                        </label>

                        {/* <div className="styles_Input">
                            <div className="styles_Input-label__7FZXI">
                                <div className="styles_Input-labelIcon__kPqY6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list ">
                                        <line x1={8} x2={21} y1={6} y2={6} />
                                        <line x1={8} x2={21} y1={12} y2={12} />
                                        <line x1={8} x2={21} y1={18} y2={18} />
                                        <line x1={3} x2="3.01" y1={6} y2={6} />
                                        <line x1={3} x2="3.01" y1={12} y2={12} />
                                        <line x1={3} x2="3.01" y1={18} y2={18} />
                                    </svg>
                                </div>buttons</div>
                            <div data-rfd-droppable-id="array" data-rfd-droppable-context-id=":r29:" className="styles_ArrayField__CIdew styles_ArrayField--hasItems__0Yc2Z">
                                <div className="styles_ArrayFieldItem__wOTCy" data-rfd-draggable-context-id=":r29:" data-rfd-draggable-id="Hero-1687283596554_buttons-0">
                                    <div className="styles_ArrayFieldItem-summary__MQ9J0">Visit GitHub<div className="styles_ArrayFieldItem-rhs__w0B_I">
                                        <div className="styles_ArrayFieldItem-actions__DWt5q">
                                            <div className>
                                                <button className="IconButton_IconButton__16ekK" title="Delete">
                                                    <span className="IconButton_IconButton-title__s0BiQ">Delete</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash ">
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="styles_DragIcon__Y8lBx">
                                                <svg viewBox="0 0 20 20" width={12} fill="currentColor">
                                                    <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="styles_ArrayFieldItem-body__ibI96">
                                        <fieldset className="styles_ArrayFieldItem-fieldset__ckg3N">
                                            <label className="styles_Input__lsTLi">
                                                <div className="styles_Input-label__7FZXI">
                                                    <div className="styles_Input-labelIcon__kPqY6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-type ">
                                                            <polyline points="4 7 4 4 20 4 20 7" />
                                                            <line x1={9} x2={15} y1={20} y2={20} />
                                                            <line x1={12} x2={12} y1={4} y2={20} />
                                                        </svg>
                                                    </div>label</div>
                                                <input className="styles_Input-input__1riv_" autoComplete="off" id="Hero-1687283596554_buttons-0_label" type="text" defaultValue="Visit GitHub" name="buttons[0].label" />
                                            </label>
                                            <label className="styles_Input__lsTLi">
                                                <div className="styles_Input-label__7FZXI">
                                                    <div className="styles_Input-labelIcon__kPqY6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-type ">
                                                            <polyline points="4 7 4 4 20 4 20 7" />
                                                            <line x1={9} x2={15} y1={20} y2={20} />
                                                            <line x1={12} x2={12} y1={4} y2={20} />
                                                        </svg>
                                                    </div>href</div>
                                                <input className="styles_Input-input__1riv_" autoComplete="off" id="Hero-1687283596554_buttons-0_href" type="text" defaultValue="https://github.com/measuredco/puck" name="buttons[0].href" />
                                            </label>
                                            <label className="styles_Input__lsTLi">
                                                <div className="styles_Input-label__7FZXI">
                                                    <div className="styles_Input-labelIcon__kPqY6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ">
                                                            <path d="m6 9 6 6 6-6" />
                                                        </svg>
                                                    </div>variant</div>
                                                <select id="Hero-1687283596554_buttons-0_variant" className="styles_Input-input__1riv_">
                                                    <option label="primary" value="primary" />
                                                    <option label="secondary" value="secondary" />
                                                </select>
                                            </label>
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="styles_ArrayFieldItem__wOTCy" data-rfd-draggable-context-id=":r29:" data-rfd-draggable-id="Hero-1687283596554_buttons-1">
                                    <div className="styles_ArrayFieldItem-summary__MQ9J0">Edit this page<div className="styles_ArrayFieldItem-rhs__w0B_I">
                                        <div className="styles_ArrayFieldItem-actions__DWt5q">
                                            <div className>
                                                <button className="IconButton_IconButton__16ekK" title="Delete">
                                                    <span className="IconButton_IconButton-title__s0BiQ">Delete</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash ">
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="styles_DragIcon__Y8lBx">
                                                <svg viewBox="0 0 20 20" width={12} fill="currentColor">
                                                    <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="styles_ArrayFieldItem-body__ibI96">
                                        <fieldset className="styles_ArrayFieldItem-fieldset__ckg3N">
                                            <label className="styles_Input__lsTLi">
                                                <div className="styles_Input-label__7FZXI">
                                                    <div className="styles_Input-labelIcon__kPqY6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-type ">
                                                            <polyline points="4 7 4 4 20 4 20 7" />
                                                            <line x1={9} x2={15} y1={20} y2={20} />
                                                            <line x1={12} x2={12} y1={4} y2={20} />
                                                        </svg>
                                                    </div>label</div>
                                                <input className="styles_Input-input__1riv_" autoComplete="off" id="Hero-1687283596554_buttons-1_label" type="text" defaultValue="Edit this page" name="buttons[1].label" />
                                            </label>
                                            <label className="styles_Input__lsTLi">
                                                <div className="styles_Input-label__7FZXI">
                                                    <div className="styles_Input-labelIcon__kPqY6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-type ">
                                                            <polyline points="4 7 4 4 20 4 20 7" />
                                                            <line x1={9} x2={15} y1={20} y2={20} />
                                                            <line x1={12} x2={12} y1={4} y2={20} />
                                                        </svg>
                                                    </div>href</div>
                                                <input className="styles_Input-input__1riv_" autoComplete="off" id="Hero-1687283596554_buttons-1_href" type="text" defaultValue="/edit" name="buttons[1].href" />
                                            </label>
                                            <label className="styles_Input__lsTLi">
                                                <div className="styles_Input-label__7FZXI">
                                                    <div className="styles_Input-labelIcon__kPqY6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ">
                                                            <path d="m6 9 6 6 6-6" />
                                                        </svg>
                                                    </div>variant</div>
                                                <select id="Hero-1687283596554_buttons-1_variant" className="styles_Input-input__1riv_">
                                                    <option label="primary" value="primary" />
                                                    <option label="secondary" value="secondary" />
                                                </select>
                                            </label>
                                        </fieldset>
                                    </div>
                                </div>
                                <button className="styles_ArrayField-addButton__rLmYA">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus ">
                                        <path d="M5 12h14" />
                                        <path d="M12 5v14" />
                                    </svg>
                                </button>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
