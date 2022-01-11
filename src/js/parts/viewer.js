//wrapper_section - обготка для елементів, які мають містити перегляд
//target_element - елемент, який має переглядатись(img)


function viewer_img(wrapper_section, target_element) {
    let parentElement = document.querySelector(wrapper_section),
        select_img = document.querySelectorAll(target_element);
    if(parentElement && select_img) {
        let viewer = document.createElement('div'),
            viewer__wrapper = document.createElement('div'),
            viewer__close = document.createElement('div'),
            span_1 = document.createElement('span'),
            span_2 = document.createElement('span'),
            viewer__img = document.createElement('div'),
            img = document.createElement('img');
    
            viewer.classList.add('viewer');
            viewer__wrapper.classList.add('viewer__wrapper');
            viewer__close.classList.add('viewer__close');
            viewer__img.classList.add('viewer__img');

            viewer__close.appendChild(span_1);
            viewer__close.appendChild(span_2);
            viewer__img.appendChild(img);
            viewer__wrapper.appendChild(viewer__close);
            viewer__wrapper.appendChild(viewer__img);
            viewer.appendChild(viewer__wrapper);
            parentElement.appendChild(viewer);

        select_img.forEach(function (item) {
            item.addEventListener('click', function() {
                let src = item.getAttribute('src');
                if(viewer.classList.contains('viewer_active')) {
                    img.setAttribute('src', src);
                } else {
                    img.setAttribute('src', src);
                    viewer.classList.add('viewer_active');
                }
            });
        });
    
        viewer__close.addEventListener('click', function() {
            if(viewer.classList.contains('viewer_active')) {
                viewer.classList.remove('viewer_active');
            }
        });
    }
}
module.exports = viewer_img;