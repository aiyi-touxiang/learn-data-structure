/**
 * Created by huweijian on 2017/4/9.
 * @title
 */
export default class Node{
    constructor(element, mode){
        this.element = element;
        this.next = null;
        if (mode == 'twoWay'){
            this.previous = null;
        }
    }
}
