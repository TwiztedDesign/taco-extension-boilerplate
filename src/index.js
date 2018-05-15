if(!window.taco) throw new Error('Taco is not defined');

var taco = window.taco;

var EVENT = 'taco-event-query';


taco.eventApi = {
    query : (q) => {
        taco.send(EVENT, {
            query : q
        });
    }
};

