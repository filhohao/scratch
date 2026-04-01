import { invoke } from "@tauri-apps/api/core";

export interface GitStatus {
  isRepo: boolean;
  hasRemote: boolean;
  hasUpstream: boolean;
  remoteUrl: string | null;
  changedCount: number;
  aheadCount: number;
  behindCount: number;
  currentBranch: string | null;
  error: string | null;
}

export interface GitResult {
  success: boolean;
  message: string | null;
  error: string | null;
}

export interface RepoInfo {
  name: string;
  path: string;
  hasRemote: boolean;
}

export async function isGitAvailable(): Promise<boolean> {
  return invoke("git_is_available");
}

export async function listRepos(): Promise<RepoInfo[]> {
  return invoke("list_repos");
}

export async function getGitStatus(repoPath?: string): Promise<GitStatus> {
  return invoke("git_get_status", { repoPath: repoPath ?? null });
}

export async function initGitRepo(repoPath?: string): Promise<void> {
  return invoke("git_init_repo", { repoPath: repoPath ?? null });
}

export async function gitCommit(message: string, repoPath?: string): Promise<GitResult> {
  return invoke("git_commit", { message, repoPath: repoPath ?? null });
}

export async function gitPush(repoPath?: string): Promise<GitResult> {
  return invoke("git_push", { repoPath: repoPath ?? null });
}

export async function gitFetch(repoPath?: string): Promise<GitResult> {
  return invoke("git_fetch", { repoPath: repoPath ?? null });
}

export async function gitPull(repoPath?: string): Promise<GitResult> {
  return invoke("git_pull", { repoPath: repoPath ?? null });
}

export async function addRemote(url: string, repoPath?: string): Promise<GitResult> {
  return invoke("git_add_remote", { url, repoPath: repoPath ?? null });
}

export async function pushWithUpstream(repoPath?: string): Promise<GitResult> {
  return invoke("git_push_with_upstream", { repoPath: repoPath ?? null });
}
