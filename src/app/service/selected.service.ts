import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SelectedService {
    selections: {
        report: StageSelection,
        result_by_stage: StageSelection,
        result_by_item: ItemSelection
    }

    constructor() {
        this.selections = {
            report: null,
            result_by_stage: null,
            result_by_item: null
        };
        this.selections.report = {
            selectedChapter: null,
            selectedStage: null,
            isSubStage: null,
            stageType: null,
        };
        this.selections.result_by_stage = {
            selectedChapter: null,
            selectedStage: null,
            isSubStage: null,
            stageType: null,
        };
        this.selections.result_by_item = {
            selectedItem: null
        };
    }

}

interface Chapter {
    name: string;
    stages: any;
}

interface StageSelection {
    selectedChapter: Chapter,
    selectedStage: any,
    isSubStage: boolean,
    stageType: string
}

interface ItemSelection {
    selectedItem: any
}