/**
 * Created by huweijian on 2017/4/21.
 * @title
 */
export default class Set{
    constructor(){
        this.dataStore = [];
    }

    /**
     * 增加元素
     */
    add(){}

    /**
     * 移除元素
     */
    remove(){}

    /**
     * 返回元素总数
     */
    size(){}

    /**
     * 执行并集操作
     */
    union(){}

    /**
     * 求俩集合的交集
     */
    intersect(){}

    /**
     * 判断一个集合是否另一个集合的子集
     */
    subset(){}

    /**
     * 返回集合的补集
     */
    difference(){}

    /**
     * 显示集合元素
     */
    show(){}
}

/*****************************/
class Set{
    /**
     * 增加元素
     * @param data
     * @returns {boolean}
     */
    add(data){
        if (!~this.dataStore.indexOf(data)){
            this.dataStore.push(data);
            return true
        } else {
            return false
        }
    }
}

/*****************************/
class Set{
    /**
     * 移除元素
     * @param data
     * @returns {boolean}
     */
    remove(data){
        let pos = this.dataStore.indexOf(data);
        if (!~pos){
            return false;
        } else {
            this.dataStore.splice(pos, 1);
            return true;
        }
    }
}

/*****************************/
class Set{
    /**
     * 返回元素总数
     * @returns {Number}
     */
    size(){
        return this.dataStore.length;
    }
}

/*****************************/
class Set{
    /**
     * 检查目标元素是否在集合里
     * @param data
     * @returns {boolean}
     */
    contains(data){
        return this.dataStore.indexOf(data) > -1;
    }

    /**
     * 执行并集操作
     * @param set
     * @returns {Set}
     */
    union(set = new Set()){
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++){
            tempSet.add(this.dataStore[i]);
        }
        for (let j = 0; j < set.dataStore.length; j++){
            if (!tempSet.contains(set.dataStore[j])){
                tempSet.add(set.dataStore[j])
            }
        }
        return tempSet;
    }
}

/*****************************/
class Set{
    /**
     * 求俩集合的交集
     * @param set
     * @returns {Set}
     */
    intersect(set = new Set()) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++){
            if (set.contains(this.dataStore[i])){
                tempSet.add(this.dataStore[i])
            }
        }
        return tempSet;
    }
}

/*****************************/
class Set{
    /**
     * 判断一个集合是否另一个集合的子集
     * @param set
     * @returns {boolean}
     */
    subset(set = new Set()){
        if (this.size() > set.size()){
            return false;
        } else {
            for (let item in this.dataStore){
                if (!set.contains(item)){
                    return false
                }
            }
        }
        return true;
    }
}

/*****************************/
class Set{
    /**
     * 返回集合的补集
     * @param set
     * @returns {Set}
     */
    difference(set = new Set()){
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++){
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i])
            }
        }
        return tempSet;
    }

}

/*****************************/
class Set{
    /**
     * 显示集合元素
     * @returns {Array}
     */
    show(){
        return this.dataStore;
    }
}

/*****************************/
class Set{}

/*****************************/
class Set{}

/*****************************/
class Set{}