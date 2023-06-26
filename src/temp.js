<Box display="flex" sx={{ backgroundColor: 'gray', height:'750px', overflow:'auto', width:'800px'}}>
    <Droppable droppableId="drop">

        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
            {data.map((item, index) => (
                <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                {(provided) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                    <CardBox
                        index={index}
                        contentId={item.contentId}
                        title={item.title}
                        addr1={item.addr1}
                        image={item.image}
                        mapx={item.mapx}
                        mapy={item.mapy}
                    />
                    </div>
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
        )}

        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
            {data2.map((item, index) => (
                <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                {(provided) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <CardBox
                        index={index}
                        contentId={item.contentId}
                        title={item.title}
                        addr1={item.addr1}
                        image={item.image}
                        mapx={item.mapx}
                        mapy={item.mapy}
                    />

                    </div>
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
        )}

        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
            {data3.map((item, index) => (
                <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                {(provided) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <CardBox
                        index={index}
                        contentId={item.contentId}
                        title={item.title}
                        addr1={item.addr1}
                        image={item.image}
                        mapx={item.mapx}
                        mapy={item.mapy}
                    />
                        
                    </div>
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
        )}

        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
            {data4.map((item, index) => (
                <Draggable key={item.contentId} draggableId={item.contentId} index={index}>
                {(provided) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                        <CardBox
                        index={index}
                        contentId={item.contentId}
                        title={item.title}
                        addr1={item.addr1}
                        image={item.image}
                        mapx={item.mapx}
                        mapy={item.mapy}
                    />
                        
                    </div>
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
        )}
        </Droppable>
    </Box>




=======






