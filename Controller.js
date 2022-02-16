({
    
    makeUnsavedChanges: function(cmp, evt, helper) {
        console.log('###Make unsaved changes');
        var unsaved = cmp.find("unsaved");
        unsaved.setUnsavedChanges(true, { label: 'You have some unsaved changes on the page!' });
    },
    clearUnsavedChanges: function(cmp, evt, helper) {
        console.log('###clear unsaved changes');
        var unsaved = cmp.find("unsaved");
        unsaved.setUnsavedChanges(false);
    },
    handleSave: function(cmp, evt, helper) {
        
        cmp.set("v.goodToGo",true);
        console.log('###Handle save : '+cmp.get("v.goodToGo"));
        // When the custom save logic has completed the setUnsavedChanges method
        // must be called again to return control to the lightning UI
        var unsaved = cmp.find("unsaved");
        if (cmp.get("v.goodToGo") != true) {
            console.log('###unsaved changes is true');
            // return control to the lightning UI while indicating that the content is still unsaved, preventing it from being dismissed
            unsaved.setUnsavedChanges(true);
        }
        else {
            console.log('###unsaved changes is false');
            // return control to the lightning UI while indicating that the content is saved
            unsaved.setUnsavedChanges(false);
        }
    },
    handleDiscard: function(cmp, evt, helper) {
        // similar to the handleSave method, but for discarding changes
        console.log('###Discard');
    },
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
        toastEvent.fire();

    }
})


