import * as API from './repository'

export function getNewReleases({ token, limit }) {
  return API.getNewReleases({ token, limit })
}

export function getAlbumById(id, { token }) {
  return API.getAlbumById(id, { token }).then(resp => {
    let infoList = []
    infoList.name = resp.name
    infoList.subTitle = resp.name
    infoList.bottomLine = resp.type
    infoList.image = resp.images.shift().url
    infoList.tracks = resp.tracks.items.map(data => {
      // console.log(data.artists)

      let tracks = []
      tracks.name = data.name
      tracks.artist = data.artists[0].name
      tracks.album = resp.name
      tracks.image = infoList.image
      tracks.previewUrl = data.preview_url
      tracks.durationMs = data.duration_ms

      return tracks
    })

    console.log('infolist', infoList)
    return { data: infoList }
    // return resp
  })

  // return API.getAlbumById(id, { token })
}
