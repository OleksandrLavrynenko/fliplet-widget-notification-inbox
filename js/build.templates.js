this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.loadMore"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"load-more\">\r\n  <button data-load-more class=\"btn btn-link btn-block btn-lg\">Load more</button>\r\n  <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.noNotifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-notifications\">\r\n  <h3>No notifications yet</h3>\r\n  <p>Check again later for updates</p>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notification"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notification {{#if readStatus}}notification-read{{else}}notification-unread{{/if}}{{#if hasLink}} notification-linked{{/if}}\" data-notification-id=\"{{id}}\" data-notification-status=\"{{status}}\">\r\n  <div class=\"subtitle\">{{TD orderAt format=\"fromNow\"}}</div>\r\n  {{#if data.title}}<h2 class=\"title\">{{data.title}}</h2>{{/if}}\r\n  {{#if data.message}}<div class=\"description\">\r\n    <p>{{data.message}}</p>\r\n  </div>{{/if}}\r\n  {{#unless readStatus}}<div class=\"notification-badge\"></div>{{/unless}}\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notificationsError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notifications-error\">\r\n  <h3>There was an error loading notifications</h3>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.toolbar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><span class=\"unread-count\">{{TN count}}</span> unread <span class=\"toolbar-read-all\">(<a data-read-all href=\"#\">Mark all as read</a>)</span><i class=\"fa fa-lg fa-fw fa-cog pull-right\" data-settings></i><i class=\"fa fa-lg fa-fw fa-refresh pull-right\" data-refresh></i></p>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.toolbar.empty"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>&nbsp;<i class=\"fa fa-lg fa-fw fa-cog pull-right\" data-settings></i><i class=\"fa fa-lg fa-fw fa-refresh pull-right\" data-refresh></i></p>\r\n";
},"useData":true});