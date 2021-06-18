import { App } from "vue";

const ImageFallBack = {

    created (el: any, binding: any, vNode: any) {
        try {

            const { value } = binding;
            const fallBackImage = '../src/assets/images/pokemon-image-fallback.jpg';
            const img = new Image();

            let error = fallBackImage;
            const original = vNode.props.src;

            if (typeof value === 'string') {
                error = value;
            }

            if (value instanceof Object) {
                error = value.fallBackImage || fallBackImage;
            }

            img.src = original;

            img.onload = () => {
                el.src = original;
            };

            img.onerror = () => {
                el.style.opacity
                el.src = error;
            };

        } catch (e) {
            console.log(e)
        }
    }
}

export default (app: App): void => {

    app.directive('image-fallback', ImageFallBack)

}
