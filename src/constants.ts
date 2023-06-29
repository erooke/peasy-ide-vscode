export namespace LanguageConstants {
    export const Id = 'p';
  }
  
  export namespace ExtensionConstants {
    export const ChannelName = 'P VSCode';
    export const RunTask = 'Run_Report';
  }
  
  export namespace ConfigurationConstants {
    export const SectionName = 'p';
  
    export const Version = 'version';
  
    export namespace Dotnet {
      export const ExecutablePath = 'dotnetExecutablePath';
    }
  
    export namespace LanguageServer {
      export const CliPath = 'cliPath';
      export const LaunchArgs = 'languageServerLaunchArgs';
      export const AutomaticVerification = 'automaticVerification';
      export const VerificationTimeLimit = 'verificationTimeLimit';
      export const VerificationVirtualCores = 'verificationVirtualCores';
      export const VerificationCachingPolicy = 'verificationCachingPolicy';
      export const MarkGhostStatements = 'markGhostStatements';
      export const DisplayGutterStatus = 'displayGutterStatus';
      export const DisplayVerificationAsTests = 'displayVerificationAsTests';
    }
  
    export namespace Compiler {
      export const OutputDir = 'compilerOutputDir';
      export const Arguments = 'runArgs';
      export const CommandPrefix = 'terminalCommandPrefix';
    }
  
    export namespace Counterexamples {
      export const Color = 'colorCounterexamples';
    }
  }
  
  export namespace DotnetConstants {
    export const ExecutableName = 'dotnet';
    export const SupportedRuntimesPattern = /Microsoft\.AspNetCore\.App\s*[56]\.0/i;
  }
  
  export namespace LanguageServerConstants {
    export const LatestStable = 'latest';
    export const LatestNightly = 'latest nightly';
    export const Custom = 'custom';
    export const LatestVersion = '4.1.0';
    export const UnknownVersion = 'unknown';
    export const PGitUrl = 'https://github.com/dafny-lang/dafny.git';
    export const DownloadBaseUri = 'https://github.com/dafny-lang/dafny/releases/download';
    export const Z3VersionForCustomInstallation = '4.8.5';
  
    export function GetResourceFolder(version: string): string[] {
      return [ 'out', 'resources', version ];
    }
  }
  