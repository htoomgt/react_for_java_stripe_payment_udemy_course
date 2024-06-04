import { Coach } from "./Coach";

export class CircketCoah implements Coach {

    public getDailyWorkout(): string {
        return "Practice your spin bowling technique";
    }
}