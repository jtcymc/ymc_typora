class EventEmitter {
  constructor() {
    this.events = {};
    this.group = new Map();
  }

  onGroup(group, key, callback) {
    if (group && key) {
      const keyStr = group + key;
      let groupMap = this.group.get(group);
      let keySet = null;
      if (groupMap) {
        keySet = groupMap;
      }
      if (!keySet) {
        keySet = new Set();
      }
      if (!keySet.has(keyStr)) {
        keySet.add(keyStr);
        this.group.set(group, keySet);
        this.on(keyStr, callback);
      }
    }
  }
  //- 使用once绑定时，执行后需关闭该事件监听
  onceGroup(group, key, callback) {
    if (group && key) {
      const keyStr = group + key;
      let groupMap = this.group.get(group);
      let keySet = null;
      if (groupMap) {
        keySet = groupMap;
      }
      if (!keySet) {
        keySet = new Set();
      }
      let that = this;
      const handler = function (...args) {
        callback.apply(null, args);
        that.off(keyStr, handler);
        keySet.delete(keyStr);
      };
      if (!keySet.has(keyStr)) {
        keySet.add(keyStr);
        this.group.set(group, keySet);
        this.once(keyStr, handler);
      }
    }
  }

  //- key存在时，只需要把回调加入数组，不存在时，需要创建该key对应的值
  on(key, callback) {
    if (Object.keys(this.events).includes(key)) {
      this.events[key].push(callback);
    } else {
      this.events[key] = [callback];
    }
  }

  //- 使用once绑定时，执行后需关闭该事件监听
  once(key, callback) {
    let that = this;
    const handler = function (...args) {
      callback.apply(null, args);
      that.off(key, handler);
    };
    if (Object.keys(this.events).includes(key)) {
      this.events[key].push(handler);
    } else {
      this.events[key] = [handler];
    }
  }

  //- 该事件存在回调时，移除该回调然后检测是否需要删除key，不存在时，直接移除该key
  off(key, callback) {
    let callbacks = this.events[key];
    if (callbacks && callbacks.length) {
      let index = callbacks.indexOf(callback);
      if (index > -1) {
        this.events[key].splice(index, 1);
        if (!callbacks.length) {
          delete this.events[key];
        }
      }
    } else {
      delete this.events[key];
    }
  }

  //- 该事件存在回调时，依次执行回调
  emit(key, ...args) {
    let callbacks = this.events[key];
    if (callbacks && callbacks.length) {
      callbacks.forEach((element) => {
        element.apply(null, args);
      });
    }
  }
  emitGroup(group, ...args) {
    let keySet = this.group.get(group);
    if (keySet) {
      for (let key of keySet) {
        this.emit(key, ...args);
      }
    }
  }
}
