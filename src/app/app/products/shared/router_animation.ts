import { animate, style, transition, trigger } from "@angular/animations";

export const routerAnimationState=trigger('RouteAnimationTrigger',[
    transition(':enter',[
        style({
            opacity:0,
            background:'red'
        }),animate(300)
    ]),
    transition(':leave',[
        animate(300,style({
            opacity:0,
            background:'yellow'
        }))
    ])
])