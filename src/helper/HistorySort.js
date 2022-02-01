import type {iHistory} from '../types/HistorytType';

export class HistorySort {

    static sortHistoryData = (data: iHistory[]) => {
        return data.sort((a, b) => (a.active < b.active))
    }
}
