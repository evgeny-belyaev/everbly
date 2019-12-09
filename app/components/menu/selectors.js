// @flow

export type MenuItem = {
    title: string,
    url: string
};

export const defaultMenu: MenuItem[] = [
    { 'title': '!!!!\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u044b: \u043f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 \u043d\u0430 \u044d\u0440\u0443\u0434\u0438\u0446\u0438\u044e', 'url': 'http://everbly.com/ru/\u044d\u0440\u0443\u0434\u0438\u0442?view=mobile' },
    { 'title': '\u0422\u0435\u0441\u0442: \u0425\u043e\u0440\u043e\u0448\u043e \u043b\u0438 \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435 \u0420\u043e\u0441\u0441\u0438\u044e?', 'url': 'http://everbly.com/ru/\u0445\u043e\u0440\u043e\u0448\u043e-\u043b\u0438-\u0432\u044b-\u0437\u043d\u0430\u0435\u0442\u0435-\u0440\u043e\u0441\u0441\u0438\u044e?view=mobile' },
    { 'title': '\u0427\u0442\u043e \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435 \u043e \u0444\u0443\u0442\u0431\u043e\u043b\u0435?', 'url': 'http://everbly.com/ru/soccer?view=mobile' },
    { 'title': '\u0424\u0430\u043a\u0442\u044b \u043e \u043a\u0438\u043d\u043e \u0421\u0421\u0421\u0420, \u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b \u043d\u0430\u0432\u0435\u0440\u043d\u044f\u043a\u0430 \u043d\u0435 \u0437\u043d\u0430\u043b\u0438!', 'url': 'http://everbly.com/ru/cinema-ussr?view=mobile' },
    { 'title': '\u0422\u0435\u0441\u0442 \u043d\u0430 \u044d\u0440\u0443\u0434\u0438\u0446\u0438\u044e \u21162', 'url': 'http://everbly.com/ru/erudit-2?view=mobile' },
    { 'title': '\u0422\u0435\u0441\u0442 \u043f\u043e \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0438', 'url': 'http://everbly.com/ru/\u0442\u0435\u0441\u0442-\u043f\u043e-\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0438?view=mobile' },
    { 'title': '\u0423\u0445 \u0442\u044b, \u043a\u043e\u0442\u044b!', 'url': 'http://everbly.com/ru/\u0443\u0445-\u0442\u044b-\u043a\u043e\u0442\u044b?view=mobile' },
    { 'title': '\u0422\u0435\u0441\u0442 \u043f\u043e \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0438', 'url': 'http://everbly.com/ru/biology?view=mobile' }
];

export const getMenuItems = (state: any) => state.menu.items && state.menu.items.length ? state.menu.items : defaultMenu;
export const getMenuTs = (state: any) => state.menu.ts ? state.menu.ts : 0;

