export class DraggableCustomAttribute {
  static inject = [Element];

  constructor(element){
    this.element = element;
    
    $(this.element).draggable({
        revert: true,      // immediately snap back to original position
        revertDuration: 0  //
      });
    }
}
