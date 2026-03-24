/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type * as patchright from 'patchright';

export type ToolCapability =
  'config' |
  'core' |
  'core-navigation' |
  'core-tabs' |
  'core-input' |
  'core-install' |
  'network' |
  'pdf' |
  'storage' |
  'testing' |
  'vision' |
  'devtools';

export type Config = {
  browser?: {
    browserName?: 'chromium' | 'firefox' | 'webkit';
    isolated?: boolean;
    userDataDir?: string;
    launchOptions?: patchright.LaunchOptions;
    contextOptions?: patchright.BrowserContextOptions;
    cdpEndpoint?: string;
    cdpHeaders?: Record<string, string>;
    cdpTimeout?: number;
    remoteEndpoint?: string;
    initPage?: string[];
    initScript?: string[];
  };

  extension?: boolean;

  server?: {
    port?: number;
    host?: string;
    allowedHosts?: string[];
  };

  capabilities?: ToolCapability[];
  saveSession?: boolean;
  saveTrace?: boolean;
  saveVideo?: {
    width: number;
    height: number;
  };
  sharedBrowserContext?: boolean;
  secrets?: Record<string, string>;
  outputDir?: string;
  outputMode?: 'file' | 'stdout';

  console?: {
    level?: 'error' | 'warning' | 'info' | 'debug';
  };

  network?: {
    allowedOrigins?: string[];
    blockedOrigins?: string[];
  };

  testIdAttribute?: string;

  timeouts?: {
    action?: number;
    navigation?: number;
  };

  imageResponses?: 'allow' | 'omit';

  snapshot?: {
    mode?: 'incremental' | 'full' | 'none';
  };

  allowUnrestrictedFileAccess?: boolean;
  codegen?: 'typescript' | 'none';
};
