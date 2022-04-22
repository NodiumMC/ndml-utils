import { OSType } from '@ndml/types'

export namespace NDMLUtils {
  export const getOS = (): OSType => {
    switch (process.platform) {
      case 'win32':
        return 'windows'
      case 'darwin':
        return 'osx'
      default:
        return 'linux'
    }
  }
}
