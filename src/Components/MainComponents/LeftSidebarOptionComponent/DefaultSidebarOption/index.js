import { ChevronRight, Eclipse, GanttChartSquare, GripVertical, Link2OffIcon, Plus, Trash2, Type,Search } from 'lucide-react'
import React, { useState } from 'react'
import CollapseAndExpand from '../../../CommonComponents/CollapseAndExpand'
import ColorInput from '../../../CommonComponents/ColorInput'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Addpagemodel from '../../../CommonComponents/Addpagemodel';
import { IconPicker } from '../../LeftSidebarOptionComponent/DefaultHeaderOption/IconPicker';

export default function DefaultSidebarOption({ singlePage, page, setPage }) {
  const sidebarcomponent = page && singlePage?.components.sidebarcomponent;

  const [visibleBlock, setVisibleBlock] = useState(null)
  const updatePageState = (updatedComponent) => {
    setPage((prevPage) => {
      return prevPage.map((itempage) => ({
        ...itempage,
        components: {
          ...itempage.sidebarcomponent,
          sidebarcomponent: {
            ...itempage.components.sidebarcomponent,
            ...updatedComponent,
          },
        },
      }))
    })
  }

  const handleSidebarStylecolor = (e, name) => {
    const updatedItems = { ...sidebarcomponent };
    updatedItems.styles[name] = e.target.value;
    updatePageState(updatedItems);
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(sidebarcomponent.items);
    const [draggedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.slice(result.destination.index, 0, draggedItem);

    updatePageState({ items: updatedItems });
  }
  const toggleVisibility = (blockNumber) => {
    setVisibleBlock((prevVisibleBlock) =>
      prevVisibleBlock === blockNumber ? null : blockNumber
    );
  };
  const addItem = () => {

    const newItems = [
      ...sidebarcomponent.items,
      {
        styles: { border: [false, false], width: 8, fontSize: 4 },
        img: "",
        icon: "HelpCircle",
        href: "",
        itemname: "New Item",
        id: sidebarcomponent.items.length === 0 ? 0 : Math.max(...sidebarcomponent.items.map(item => item.id)) + 1,
        type: "text",
      },
    ];

    updatePageState({ items: newItems });
  };


  const deleteItem = (itemId) => {
    const updatedItems = sidebarcomponent.items.filter((item) => item.id !== itemId);
    updatePageState({ items: updatedItems });
  };

  const updateItems = (index, val, property) => {
    const updatedItems = [...singlePage.components.sidebarcomponent.items];

    if (property.includes("border")) {
      updatedItems[index].styles.border[parseInt(property.split('.')[1])] =
        !updatedItems[index].styles.border[parseInt(property.split('.')[1])];
    }
    updatedItems[index][property] = val;
    updatePageState({ items: updatedItems });

  };
  return (
    <>
      <div className="title">
        <div className="breadcrumbs">
          <div className="breadcrumb">
            <button className="breadcrumbLabel">Page</button>
            <ChevronRight />
          </div>
          <div className="heading">
            <h2 className="Heading--xs">Sidebar</h2>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="HeaderFields">
          <>
            <div className="Input">
              <div className="Input-label">
                <div className="Input-labelIcon">
                  <Eclipse />
                </div>Styles</div>

              <CollapseAndExpand
                name={"Background"}
                contentComponent={ColorInput}
                componentProps={{
                  bgval: sidebarcomponent.styles?.bgColor,
                  funOnchange: (e) => handleSidebarStylecolor(e, "bgColor")
                }}
              />
              <CollapseAndExpand
                name={"Color"}
                contentComponent={ColorInput}
                componentProps={{
                  bgval: sidebarcomponent.styles?.color,
                  funOnchange: (e) => handleSidebarStylecolor(e, "color")
                }}
              />

            </div>

            <div className="Input">
              <div className="Input-label">
                <div className="Input-labelIcon">
                  <GanttChartSquare />
                </div>Sidebar Items</div>
              <div className='fullbox'>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="headerarray">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {sidebarcomponent.items.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                            {(provided, snapshot) => (
                              <div
                                className="ItemBox"
                                key={index}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  ...provided.draggableProps.style,
                                  background: snapshot.isDragging ? 'lightblue' : 'white',
                                }}
                              >
                                <div className={`ArrayFieldItem-summary ${visibleBlock === item.id && "active"}`} onClick={() => toggleVisibility(item.id)}>
                                  Sidebar Item {item.id}
                                  <div className="ArrayFieldItem">
                                    <div className="ArrayFieldItem-actions">
                                      <button className="IconButton_IconButton" title="Delete" onClick={() => deleteItem(item.id)}>
                                        <span className="IconButton_IconButton-title">Delete</span>
                                        <Trash2 />
                                      </button>
                                    </div>
                                    <div>
                                      <div className="DragIcon">
                                        <GripVertical />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {visibleBlock === item.id &&
                                  <div className="ArrayFieldItem-body">
                                    <fieldset className="ArrayFieldItem-fieldset">
                                      <div className="Input">
                                      <div className="Input-label">
                                        <div className="Input-labelIcon">
                                          <Search />
                                        </div>Icon</div>
                                      <IconPicker index={index} iconName={item.icon} sidebarcomponent={sidebarcomponent} page={page} setPage={setPage} />


                                      <div className="Input-label">
                                        <div className="Input-labelIcon">
                                          <Type />
                                        </div>label</div>
                                      <input className="Input-input" type="text" value={item.itemname}
                                        onChange={(e) => { updateItems(index, e.target.value, "itemname"); }} />

                                      <div className="Input-label mt-2">
                                        <div className="Input-labelIcon">
                                          <Link2OffIcon />
                                        </div>Href</div>

                                      <input className="Input-input" type="text" value={item.href}
                                        onChange={(e) => { updateItems(index, e.target.value, "href") }} />
                                      <Addpagemodel page={page} setPage={setPage} />
                                  </div>

                                    </fieldset>
                                  </div>
                                }
                      </div>
                    )}
                  </Draggable>
                        ))}
                  {provided.placeholder}
              </div>
                    )}
            </Droppable>
          </DragDropContext>
          <button className="ArrayField-addButton"
            onClick={addItem}
          >
            <Plus />
          </button>
        </div>
      </div>
    </>
        </div >
      </div >
    </>
  )
}
