import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3001';
export const ranaSocket = io(SOCKET_URL);

export enum ServerActions {
  InstallCore = 'installCore',
  Start = 'start',
  Stop = 'stop',
  ExecCommand = 'execCommand',
  RemoveCore = 'removeCore',
  Clear = 'clear',
  Eula = 'eula',
  FlushServers = 'flushServers',
  RemoveServer = 'removeServer',
}

export enum ServerStatus {
  Created = 'created',
  CoreInstalling = 'coreInstalling',
  CoreInstalled = 'coreInstalled',
  Starting = 'starting',
  Started = 'started',
  Stopping = 'stopping',
  Stopped = 'stopped',
  Removing = 'removing',
}

export enum RanaSocketEvents {
  ServerUpdate = 'serverUpdate',
  ClientServerUpdate = 'clientServerUpdate',
  ServersFlush = 'serversFlush',
  SocketServersFlush = 'socketServersFlush',
}
