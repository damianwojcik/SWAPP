import Vue from 'vue';

import capitalize from '@/utils/capitalize';

Vue.filter('capitalize', value => capitalize(value));
