/**
 * Created by huweijian on 2017/4/21.
 * @title
 */
import * as types from '../mutation-type';

const state = {
    navs: [
        {
            name: '概述',
            id: 'Summarys'
        },
        {
            name: '创建集合',
            id: 'Created'
        }
    ],
    activityNav: 'Summarys',
    code: {}
};
const getters = {};
const actions = {};
const mutations = {
    /**
     * 设置选择
     * @param state
     * @param id
     */
    [types.JAVASCRIPT_DATA_SET_ACTIVITY_NAV]: (state, id) => {
        state.activityNav = id;
    },
    /**
     * 写入代码内容
     * @param state
     * @param name
     * @param text
     */
    [types.JAVASCRIPT_DATA_SET_CODE_SET]: (state, {name, text}) => {
        state.code[name] = text;
    }
};

/**
 * 输出队列模块
 */
export default {
    state,
    getters,
    actions,
    mutations
}
