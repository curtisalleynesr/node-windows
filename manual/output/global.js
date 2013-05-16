Ext.data.JsonP.global({"tagname":"class","name":"global","mixins":[],"alternateClassNames":[],"members":{"cfg":[{"name":"eventLog","tagname":"cfg","owner":"global","meta":{},"id":"cfg-eventLog"},{"name":"name","tagname":"cfg","owner":"global","meta":{},"id":"cfg-name"}],"property":[],"method":[{"name":"auditFailure","tagname":"method","owner":"global","meta":{},"id":"method-auditFailure"},{"name":"auditSuccess","tagname":"method","owner":"global","meta":{},"id":"method-auditSuccess"},{"name":"createExe","tagname":"method","owner":"global","meta":{},"id":"method-createExe"},{"name":"error","tagname":"method","owner":"global","meta":{},"id":"method-error"},{"name":"generateXml","tagname":"method","owner":"global","meta":{},"id":"method-generateXml"},{"name":"info","tagname":"method","owner":"global","meta":{},"id":"method-info"},{"name":"isAdminUser","tagname":"method","owner":"global","meta":{},"id":"method-isAdminUser"},{"name":"kill","tagname":"method","owner":"global","meta":{},"id":"method-kill"},{"name":"launch","tagname":"method","owner":"global","meta":{},"id":"method-launch"},{"name":"list","tagname":"method","owner":"global","meta":{},"id":"method-list"},{"name":"monitor","tagname":"method","owner":"global","meta":{},"id":"method-monitor"},{"name":"warn","tagname":"method","owner":"global","meta":{},"id":"method-warn"}],"event":[],"css_var":[],"css_mixin":[]},"aliases":{},"meta":{},"files":[{"filename":"","href":""}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Global variables and functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-eventLog' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-cfg-eventLog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-cfg-eventLog' class='name expandable'>eventLog</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The event log where messages should be written. ...</div><div class='long'><p>The event log where messages should be written. This is either <code>APPLICATION</code> or <code>SYSTEM</code>.</p>\n<p>Defaults to: <code>APPLICATION</code></p></div></div></div><div id='cfg-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-cfg-name' class='name expandable'>name</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The source of the log information. ...</div><div class='long'><p>The source of the log information. This is commonly the title of an application\nor the Node.js script name (i.e. MyApp).</p>\n<p>Defaults to: <code>Node.js</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-auditFailure' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-method-auditFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-auditFailure' class='name expandable'>auditFailure</a>( <span class='pre'>message, [code], [callback]</span> )</div><div class='description'><div class='short'>Log an audit failure message. ...</div><div class='long'><p>Log an audit failure message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content of the log message.</p>\n</div></li><li><span class='pre'>code</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The event code to assign to the message.</p>\n<p>Defaults to: <code>1000</code></p></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>An optional callback to run when the message is logged.</p>\n</div></li></ul></div></div></div><div id='method-auditSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-method-auditSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-auditSuccess' class='name expandable'>auditSuccess</a>( <span class='pre'>message, [code], [callback]</span> )</div><div class='description'><div class='short'>Log an audit success message. ...</div><div class='long'><p>Log an audit success message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content of the log message.</p>\n</div></li><li><span class='pre'>code</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The event code to assign to the message.</p>\n<p>Defaults to: <code>1000</code></p></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>An optional callback to run when the message is logged.</p>\n</div></li></ul></div></div></div><div id='method-createExe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/winsw.html#global-method-createExe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-createExe' class='name expandable'>createExe</a>( <span class='pre'>name, [dir], [callback]</span> )</div><div class='description'><div class='short'>Create the executable ...</div><div class='long'><p>Create the executable</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The alphanumeric string (spaces are stripped) of the <code>.exe</code> file. For example, <code>My App</code> generates <code>myapp.exe</code></p>\n</div></li><li><span class='pre'>dir</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The output directory where the executable will be saved.</p>\n<p>Defaults to: <code>cwd</code></p></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The callback to fire upon completion.</p>\n</div></li></ul></div></div></div><div id='method-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-method-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-error' class='name expandable'>error</a>( <span class='pre'>message, [code], [callback]</span> )</div><div class='description'><div class='short'>Log an error message. ...</div><div class='long'><p>Log an error message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content of the log message.</p>\n</div></li><li><span class='pre'>code</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The event code to assign to the message.</p>\n<p>Defaults to: <code>1000</code></p></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>An optional callback to run when the message is logged.</p>\n</div></li></ul></div></div></div><div id='method-generateXml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/winsw.html#global-method-generateXml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-generateXml' class='name expandable'>generateXml</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>Generate the XML for the winsw configuration file. ...</div><div class='long'><p>Generate the XML for the winsw configuration file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object must have the following attributes:</p>\n\n<ul>\n<li><em>id</em> This is is how the service is identified. Alphanumeric, no spaces.</li>\n<li><em>name</em> The descriptive name of the service.</li>\n<li><em>script</em> The absolute path of the node.js script. i.e. <code>C:\\path\\to\\myService.js</code></li>\n</ul>\n\n\n<p>Optional attributes include</p>\n\n<ul>\n<li><em>description</em> The description that shows up in the service manager.</li>\n<li><em>flags</em> Any flags that should be passed to node. Defaults to <code>--harmony</code> to add ES6 support.</li>\n<li><em>logmode</em> Valid values include <code>rotate</code> (default), <code>reset</code> (clear log), <code>roll</code> (move to .old), and <code>append</code>.</li>\n<li><em>logpath</em> The absolute path to the directory where logs should be stored. Defaults to the current directory.</li>\n<li><em>dependencies</em> A comma delimited list or array of process dependencies.</li>\n<li><em>env</em> A key/value object or array of key/value objects containing\nenvironment variables to pass to the process. The object might look like <code>{name:'HOME',value:'c:\\Windows'}</code>.</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-info' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-method-info' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-info' class='name expandable'>info</a>( <span class='pre'>message, [code], [callback]</span> )</div><div class='description'><div class='short'>Log an informational message. ...</div><div class='long'><p>Log an informational message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content of the log message.</p>\n</div></li><li><span class='pre'>code</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The event code to assign to the message.</p>\n<p>Defaults to: <code>1000</code></p></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>An optional callback to run when the message is logged.</p>\n</div></li></ul></div></div></div><div id='method-isAdminUser' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/cmd.html#global-method-isAdminUser' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-isAdminUser' class='name expandable'>isAdminUser</a>( <span class='pre'>callback</span> )</div><div class='description'><div class='short'>Determines whether the current working user is an administrator. ...</div><div class='long'><p>Determines whether the current working user is an administrator.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Receives true/false as an argument to the callback.</p>\n</div></li></ul></div></div></div><div id='method-kill' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/cmd.html#global-method-kill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-kill' class='name expandable'>kill</a>( <span class='pre'>PID, force, callback</span> )</div><div class='description'><div class='short'>Kill a specific process ...</div><div class='long'><p>Kill a specific process</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>PID</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Process ID</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>Force close the process.</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-launch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/wrapper.html#global-method-launch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-launch' class='name expandable'>launch</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>A method to start a process. ...</div><div class='long'><p>A method to start a process.</p>\n</div></div></div><div id='method-list' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/cmd.html#global-method-list' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-list' class='name expandable'>list</a>( <span class='pre'>callback, verbose</span> )</div><div class='description'><div class='short'>List the processes running on the server. ...</div><div class='long'><p>List the processes running on the server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Receives the process object as the only callback argument</p>\n</div></li><li><span class='pre'>verbose</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-monitor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/wrapper.html#global-method-monitor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-monitor' class='name expandable'>monitor</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Monitor the process to make sure it is running ...</div><div class='long'><p>Monitor the process to make sure it is running</p>\n</div></div></div><div id='method-warn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/eventlog.html#global-method-warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-warn' class='name expandable'>warn</a>( <span class='pre'>message, [code], [callback]</span> )</div><div class='description'><div class='short'>Log a warning message. ...</div><div class='long'><p>Log a warning message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content of the log message.</p>\n</div></li><li><span class='pre'>code</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The event code to assign to the message.</p>\n<p>Defaults to: <code>1000</code></p></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>An optional callback to run when the message is logged.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});