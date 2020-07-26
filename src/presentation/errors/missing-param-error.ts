export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missiong param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
