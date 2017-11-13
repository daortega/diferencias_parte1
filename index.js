$('.chart').segbar([
    {
        data: [
            { title: '16_Evacuate', value: 1, color: '#8E44AD' },
            { title: '17_Evacuate_fast', value: 217, color: '#81CFE0' },
            { title: 'Repetidas', value: 0, color: '#EB974E' },
            { title: 'Sin respuesta', value: 13, color: '#EB974E' }
        ]
    },
    {
        data: [
            { title: '27_Geo_point', value: 123},
            { title: '06_Assembly_family', value: 51},
            { title: '05_Assembly_group', value: 52 },
            { title: 'Repetidas', value: 8 },
            { title: 'Sin respuesta', value: 13 }
        ]
    },
    {
        data: [
            { title: 'Triángulo amarillo', value: 104 },
            { title: 'Octágono rojo', value: 116 },
            { title: 'Repetidas', value: 4 },
            { title: 'Sin respuesta', value: 15 },
        ]
    }
]).addClass('mb-5');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
