import * as admin from 'firebase-admin';
import { onRequest } from 'firebase-functions/v2/https';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env: ${name}`);
  }
  return value;
}

function getProjectId(): string {
  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GCLOUD_PROJECT ||
    JSON.parse(process.env.FIREBASE_CONFIG || '{}').projectId;

  if (!projectId) {
    throw new Error(
      'Missing project id env (FIREBASE_PROJECT_ID/GCLOUD_PROJECT/FIREBASE_CONFIG)',
    );
  }

  return projectId;
}

if (!admin.apps.length) {
  const hasServiceAccount =
    !!process.env.FIREBASE_CLIENT_EMAIL && !!process.env.FIREBASE_PRIVATE_KEY;
  const projectId = getProjectId();

  admin.initializeApp(
    hasServiceAccount
      ? {
          projectId,
          credential: admin.credential.cert({
            projectId,
            clientEmail: requireEnv('FIREBASE_CLIENT_EMAIL'),
            privateKey: requireEnv('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
          }),
        }
      : {
          projectId,
        },
  );
}

export const healthcheck = onRequest((_req, res) => {
  res.json({ status: 'ok' });
});
