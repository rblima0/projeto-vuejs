import Vue from 'vue';

Vue.directive('meu-transform', {
    bind(el, binding, vnode){
        
        let current = 0;

        el.addEventListener('dblclick', function(){

            let incremento = 180;
            let animate = false;

            if(binding.value){
                incremento = binding.value.incremento;
                animate = binding.value.animate;
            }

            //let incremento = binding.value || 180;
            current += incremento;
            el.style.transform = `rotate(${current}deg)`;
            
            if(animate) el.style.transition = `transform 0.8s`;
        });
    }
});