const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: '300px',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels: { defaults: [] },

  blockManager: {
    appendTo: '#blocks',
    blocks: [
      {
        id: 'section', // id is mandatory
        label: '<b style="font-size: 20px;">Section</b>', // You can use HTML/SVG inside labels
        attributes: { class:'gjs-block-section' },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      }, {
        id: 'text',
        label: '<b style="font-size: 20px;">Text</b>',
        content: '<div data-gjs-type="text">Insert your text here</div>',
      }, {
        id: 'image',
        label: '<b style="font-size: 20px;">Image</b>',
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content:{ type: 'image' },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      }, {
        id: 'column',
        label: '<b style="font-size: 20px;">Column</b>',
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: `<div class="column">
        <h1>This is a simple title</h1>
        <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
      </div>`,
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      }, {
        id: 'button',
        label: '<b style="font-size: 20px;">Button</b>',
        select: true,
        content: `<div class="button">
        <button>Button</button></div>`,
        activate: true,
      },{
          id: 'navbar',
          label: '<b style="font-size: 20px;">NavBar</b>',
          select: true,
          content: `<div class="navbar" style="height:50px; font-size:30px; display: flex; align-items: center; justify-items:center;background: black; color: white;">
          <a1 style="margin-left:600px;padding : 11px">Home</a1>
          <a2 style="padding: 11px;">About</a2>
          <a3 style="padding: 11px;">Contact</a3></div>`,
          activate: true,
      }, {
          id: 'fotter',
          label: '<b style="font-size: 20px;">Fotter</b>',
          select: true,
          content: `<div class="fotter" style="height: 300px; background: black; color:white; margin-top: 393px;box-sizing: border-box;padding: 15px;">
          <f1 style=" font-size: 30px; width: 400px; margin-left: 100px;margin-top:20px; padding: 5px;">Fotter</f1>
          <f1 style=" font-size: 30px; width: 400px; margin-left: 300px;margin-top:20px; padding: 5px;">Fotter</f1>
          <f1 style=" font-size: 30px; width: 400px; margin-left: 250px;margin-top:20px; padding: 5px;">Fotter</f1>
          <div style=" font-size: 15px; width: 250px; margin-top: 30px; margin-left: 100px; padding: 5px;">This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          <div style=" font-size: 15px; width: 250px; margin-top: -50px; margin-left: 480px; padding: 5px;">This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          <div style=" font-size: 15px; width: 250px; margin-top: -50px; margin-left: 810px; padding: 5px;">This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          <f1 style=" font-size: 30px; width: 400px; margin-left: 100px;margin-top:20px; padding: 5px;">Fotter</f1>
          <f1 style=" font-size: 30px; width: 400px; margin-left: 300px;margin-top:20px; padding: 5px;">Fotter</f1>
          <f1 style=" font-size: 30px; width: 400px; margin-left: 250px;margin-top:20px; padding: 5px;">Fotter</f1>
          <div style=" font-size: 15px; width: 250px; margin-top: 30px; margin-left: 100px; padding: 5px;">This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          <div style=" font-size: 15px; width: 250px; margin-top: -50px; margin-left: 480px; padding: 5px;">This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          <div style=" font-size: 15px; width: 250px; margin-top: -50px; margin-left: 810px; padding: 5px;">This is just a Lorem text: Lorem ipsum dolor sit amet</div></div>`,
          activate: true,
      }
    ]
  },
   
  deviceManager: {
    devices: [{
        name: 'Desktop',
        width: '', // default size
      }, {
        name: 'Mobile',
        width: '320px', // this value will be used on canvas width
        widthMedia: '480px', // this value will be used in CSS @media
    }]
  },

  layerManager: {
    appendTo: '.layers-container'
  },

  // We define a default panel as a sidebar to contain layers
  panels: {
    defaults: [{
      id: 'layers',
      el: '.panel__right',
      // Make the panel resizable
      resizable: {
        maxDim: 350,
        minDim: 200,
        tc: 0, // Top handler
        cl: 1, // Left handler
        cr: 0, // Right handler
        bc: 0, // Bottom handler
        // Being a flex child we need to change `flex-basis` property
        // instead of the `width` (default)
        keyWidth: 'flex-basis',
      },

    },
    {
      id: 'panel-switcher',
      el: '.panel__switcher',
      buttons: [{
          id: 'show-layers',
          active: true,
          label: '<b style="margin:20px;">Layers</b>',
          command: 'show-layers',
          // Once activated disable the possibility to turn it off
          togglable: false,
        }, {
          id: 'show-style',
          active: true,
          className: 'fa fa-paint-brush',
          label: '<b style="margin:20px;">Styles</b>',
          command: 'show-styles',
          togglable: false,
      }],
    },
    {
      id: 'panel-switcher',
      el: '.panel__switcher',
      buttons: [
        // ...
        {
          id: 'show-traits',
          active: true,
          label: 'Traits',
          command: 'show-traits',
          togglable: false,
      }],
    },
    {
      id: 'panel-devices',
      el: '.panel__devices',
      buttons: [{
          id: 'device-desktop',
          label: 'D',
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        }, {
          id: 'device-mobile',
          label: 'M',
          command: 'set-device-mobile',
          togglable: false,
      }],
    }]
  },
  traitManager: {
    appendTo: '.traits-container',
  },
  selectorManager: {
    appendTo: '.styles-container'
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: [{
        name: 'Dimension',
        open: false,
        // Use built-in properties
        buildProps: ['width', 'min-height', 'padding', 'margin', 'display', 'position', 'text-align'],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: 'integer',
            name: 'Width', // Label for the property
            property: 'width', // CSS property (if buildProps contains it will be extended)
            units: ['px', '%'], // Units, available only for 'integer' types
            defaults: 'auto', // Default value
            min: 0, // Min value, available only for 'integer' types
          }, {
            type: 'select',
            property: 'display',
            label: 'Display',
            default: 'block',
            // Additional props
            options: [
              {id: 'block', label: 'Block'},
              {id: 'inline', label: 'Inline'},
              {id: 'none', label: 'None'},
              {id: 'flex', label: 'Flex'},
              {id: 'grid', label: 'Grid'},
            ]
          },
        ]
      },{
        name: 'Font Features',
        open: false,
        buildProps: ['custom-prop','font-style', 'font-family', 'font-weight', 'letter-spacing', 'word-spacing'],
        properties: [
          {
            id: 'custom-prop',
            name: 'Font Size',
            property: 'font-size',
            type: 'select',
            defaults: '32px',
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: '12px', name: 'Tiny' },
              { value: '18px', name: 'Medium' },
              { value: '32px', name: 'Big' },
            ],
         }
        ]
      },{
        name: 'Animations',
        open: false,
        buildProps: ['transition', 'transform'],
        properties: [
          {
            type: "select",
            label: "animation",
            name: 'Animation',
            options: [
              { value: 'bounce', name: 'Bounce' },
              { value: 'hover', name: 'Hover' },
              { value: 'onclick', name: 'Onclick' },
            ],
         }
        ]
      },{
        name: 'Extra',
        open: false,
        buildProps: ['background-color', 'color', 'box-shadow', 'text-shadow'],
      }]
  },
});

editor.BlockManager.add('my-block-id', {
  // ...
  content: {
    tagName: 'div',
    draggable: false,
    attributes: { 'some-attribute': 'some-value' },
    components: [
      {
        tagName: 'span',
        content: '<b>Some static content</b>',
      }, {
        tagName: 'div',
        // use `content` for static strings, `components` string will be parsed
        // and transformed in Components
        components: '<span>HTML at some point</span>',
      }
    ]
  }
});

editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top',
});
editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true, // active by default
      className: 'btn-toggle-borders',
      label: '<u style="margin: 16px;">B</u>',
      command: 'sw-visibility', // Built-in command
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: '<a style="margin: 16px;">Exp</a>',
      command: 'export-template',
      context: 'export-template', // For grouping context of buttons from the same panel
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: '<b style="margin: 16px;">JSON</b>',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }
  ],
  });

// Define commands
editor.Commands.add('show-layers', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getLayersEl(row) { return row.querySelector('.layers-container') },

  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = '';
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = 'none';
  },
});
editor.Commands.add('show-styles', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getStyleEl(row) { return row.querySelector('.styles-container') },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
  },
});

editor.Commands.add('show-traits', {
  getTraitsEl(editor) {
    const row = editor.getContainer().closest('.editor-row');
    return row.querySelector('.traits-container');
  },
  run(editor, sender) {
    this.getTraitsEl(editor).style.display = '';
  },
  stop(editor, sender) {
    this.getTraitsEl(editor).style.display = 'none';
  },
});
editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
});