import LinuxOS from '../models/linuxos.js'


//Get all
async function getAllLinuxOS(req, res){
  try {
    const allLinuxOS = await LinuxOS.find()
    // const allLinuxOS = []
    res.json(allLinuxOS)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message : error.message})
  }
}

//Get one
async function getLinuxOSbyId(req, res){
  try {
    const linuxOS = await LinuxOS.findById(req.params.id)
    res.json(linuxOS)
  } catch (error) {
    console.log(error.message)
    res.status(404).json({message : error.message})
  }
}

//Create
async function createLinuxOS(req, res){
  try {
    console.log(req.body.name)

    const NewLinuxOS = new LinuxOS({name: req.body.name})

    await NewLinuxOS.save()

    res.json(NewLinuxOS) 
  } catch (error) {
    res.json({message : error.message})
  }
}

//Update
async function updateLinuxOS(req, res){
  try {
    //ir buscar o registo existente -> pelo id
    const recordToUpdate = await LinuxOS.findById(req.params.id)
       
    //fazer as alteracoes
    recordToUpdate.name = req.body.name

    //gravar as alteracoes
    await recordToUpdate.save()
    
    // terminamos com sucesso ou nao
    res.json(recordToUpdate) 


  } catch (error) {
    res.json({message : error.message})
  }
}

//Delete
async function deleteLinuxOS(req, res){
  try {
    await LinuxOS.findByIdAndRemove(req.params.id)
    res.json({message: 'LinuxOS has been removed'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export {getAllLinuxOS, getLinuxOSbyId, createLinuxOS, updateLinuxOS, deleteLinuxOS}