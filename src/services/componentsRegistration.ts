import { App } from "vue";
import Card from '../components/base/card/card.vue'
import Skeleton from '../components/base/skeleton/skeleton.vue'
import Chips from '../components/base/chips/chips.vue'
import Timeline from '../components/base/timeline/timeline.vue'
import TimelineItem from '../components/base/timeline-item/timeline-item.vue'

export default (app: App): void => {

    app.component("Card", Card)
    app.component("Skeleton", Skeleton)
    app.component("Chips", Chips)
    app.component("Timeline", Timeline)
    app.component("TimelineItem", TimelineItem)

}
