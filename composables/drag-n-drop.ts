export const useDragNDrop = () => useState('drag-n-drop', () => ({
    draggingElement: null,
    isDragging: false,
    draggingOverColumn: null,
    draggedData: null,
}))
