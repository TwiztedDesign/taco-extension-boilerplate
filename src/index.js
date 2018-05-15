if(!window.taco) throw new Error('Taco is not defined');

var taco = window.taco;

var EVENT = 'taco-event-query';


taco.eventApi = {
    query : function(query){
        taco.send(EVENT, {
            query : query
        });
    }
};

