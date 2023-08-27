import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertPorcoes(req, res) { 
    let porcoes = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO porcoes (item, descricao, preco, img) VALUES (?, ?, ?, ?)', 
        [porcoes.item, porcoes.descricao, porcoes.preco])  
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdatePorcoes(req, res) {  
    let porcoes = req.body
    openDb().then(db =>{  
        db.run('UPDATE Porcoes SET item=?, descricao=?, preco=? img=? WHERE id=?', 
        [porcoes.item, porcoes.descricao, porcoes.preco, pratos.img, porcoes.id]) 
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------

export async function selectPorcoes(req, res) {  
    let porcoes = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM Porcoes', )
        .then(porcoes => res.json(porcoes))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectPorcaoFromId(req, res) {  
    let id = req.body.id;
    openDb().then(db =>{  
        db.get('SELECT * FROM porcoes WHERE id=?',[id] )
        .then(porcoes =>res.json(porcoes));
    });
  }

  export async function deletePorcoes(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM porcoes WHERE id=?',[id] )
        .then(porcoes => res.json(porcoes))
    });
  }