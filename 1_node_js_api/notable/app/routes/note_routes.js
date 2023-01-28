var ObjectID = require('mongodb').ObjectId;

module.exports = function(app, db){


    
    app.get('/notes/:id',(req, res)=>{

        const id = req.params.id;
        //mongodb requires id as object
        const details = {'_id': new ObjectID(id)};

        db.db('notes').collection('notes').findOne(details, (err, item)=>{
            if (err) {res.send({'error': 'An error has occured'});}
            else { res.send(item);}

        });



    });

    app.delete('/notes/:id',(req, res)=>{

        const id = req.params.id;
        //mongodb requires id as object
        const details = {'_id': new ObjectID(id)};

        db.db('notes').collection('notes').remove(details, (err, item)=>{
            if (err) {res.send({'error': 'An error has occured'});}
            else { res.send('Note'+id+' deleted');}

        });



    });



    //update
    app.put('/notes/:id',(req, res)=>{

        const id = req.params.id;
        //mongodb requires id as object
        const details = {'_id': new ObjectID(id)};
        const note = { text: req.body.body, title: req.body.title};

        db.db('notes').collection('notes').updateOne(details, {$set: note}, (err, item)=>{
            if (err) {res.send({'error': 'An error has occured'});}
            else { res.send(item);}

        });



    });


    app.post('/notes',(req,res)=>{
        // console.log(req.body);
        // res.send('hello');

        const note = { text: req.body.body, title: req.body.title};


        db.db('notes').collection('notes')
            .insertOne(note, (err, result)=>{
                    if (err) {res.send({'error': 'An error has occured'});}
                    else { res.send(result);}
        });
    });
}