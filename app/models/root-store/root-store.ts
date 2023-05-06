import { Instance, SnapshotOut, types } from "mobx-state-tree"

import {userImageData} from '../sampleData'

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  name: '',
  avatar: '',
  permission: '',
  actor: '',

}).views(self => ({
  get avatarUrl() {
    return `data:image/png;base64,${self.avatar}`
  },
})).actions(self => ({
  setActor(actor: string) {
    self.actor = actor;
  },
  setPermission(permission: string) {
    self.permission = permission;
  },
  setName(name: string) {
    self.name = name;
  },
  setAvatar(avatar: string) {
    self.avatar = avatar;
  },
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {
}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {
}
