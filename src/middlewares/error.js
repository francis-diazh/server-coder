const error_handler = (error, req, res, next) => {   //unico qe depende de 4 parametros
    console.log(error)
    return res.status(500).json({     //errores de servidor son tipo 500
        success: false,
        message:error.message
    })  
}

export default error_handler