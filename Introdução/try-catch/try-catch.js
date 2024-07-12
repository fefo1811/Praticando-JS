let video = Array()

video[1] = Array()
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video) {
    try {
        console.log(video[0]['nome'])
    } catch (e) {
        console.log(`Este foi o erro: ${e}`)
        throw new Error("Foi identificado um erro") // Força a interrupção do script fora do escopor try..catch...finally
    } finally {
        console.log('Finalizado')
    }
}

getVideo(video)

console.log('Teste')