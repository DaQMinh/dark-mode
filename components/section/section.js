/*-----------------------------------------------------------------------------
>>> «SECTION» COMPONENT
-----------------------------------------------------------------------------*/

Satus.section = function(object) {
    let component = document.createElement('section'),
        component_label = document.createElement('span'),
        label = this.get('locale/' + object.label) || object.label;

    if (label) {
        component_label.classList.add('satus-section__label');
        component_label.innerText = label;

        component.appendChild(component_label);
    }

    this.render(component, object);

    return component;
};