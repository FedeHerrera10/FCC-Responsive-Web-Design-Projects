(function() {
  
  function compileChildren(children) {
    return children.map(function(child) {
      if(Array.isArray(child)) {
        if(child.length === 0) {
          return child;
        } else if(Array.isArray(child[0])) {
          return child.map(compile);
        } else {
          return compile(child);
        }
      }

      return child;
    });
  }

  function compile(item) {
    var type = item[0];
    var props = item[1];
    var children;

    if(props != null && props.constructor === Object) {
      children = item.slice(2);
    } else {
      props = {};
      children = item.slice(1);
    }

    children = compileChildren(children);
    
    if(typeof type === 'string') {
      // handle class names
      var parts = type.split('.');
      if(parts.length === 2) {
        type = parts[0];
        props.className = parts[1];
      }

      // handle id
      parts = type.split('#');
      if(parts.length === 2) {
        type = parts[0];
        props.id = parts[1];
      }
    }
    
    if(typeof props.innerHTML !== 'undefined') {
      props.dangerouslySetInnerHTML = {__html: props.innerHTML};
      delete props.innerHTML;
    }
    
    return React.createElement.apply(React, [type, props].concat(children));
  }
  
  window.ReactCompile = compile;
  
})();