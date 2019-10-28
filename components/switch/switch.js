/*-----------------------------------------------------------------------------
>>> «SWITCH» COMPONENT
-----------------------------------------------------------------------------*/

Satus.switch = function(object, key) {
    let element = document.createElement('div'),
        label = this.get('locale/' + object.label) || object.label || false;

    element.innerHTML = (label ? '<div class=label>' + label + '</div>' : '') +
        '<div class=container>' +
        ((object.icons || {}).before || '') + '<div class=track><div class=thumb></div></div>' + ((object.icons || {}).after || '') +
        '</div>';

    element.dataset.value = Satus.get((object.storage || '') + '/' + key) || object.value || false;

    element.addEventListener('click', function(event) {
        if (this.dataset.value == 'true') {
            this.dataset.value = 'false';
        } else {
            this.dataset.value = 'true';
        }

        Satus.set((object.storage || '') + '/' + key, this.dataset.value === 'true');
    });

    return element;
};